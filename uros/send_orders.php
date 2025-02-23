<?php
/**
 * Send Orders to Cedarx API
 * 
 * Minimum required fields for a valid order:
 * - ClientOrderID (Shopify order ID)
 * - Patient info (name, DOB, address)
 * - Product info (CedaRx product ID, quantity)
 * 
 * This script:
 * 1. Fetches new Shopify orders with notes
 * 2. Transforms them to Cedarx XML format
 * 3. Sends to Cedarx API
 * 4. Updates Shopify with results
 */

function sendOrdersToCedarx() {
    global $shop_url, $access_token;
    
    // Get credentials for current shop
    $shop = getShopCredentials($shop_url);
    $CEDARX_KEY = $shop['cedarx_key'];

    // Get new Shopify orders
    $orders = getNewShopifyOrders($shop_url, $access_token);

    foreach ($orders as $order) {
        // Build minimum XML structure
        $xml = '<?xml version="1.0" encoding="UTF-8"?>
        <OrderTransmission>
            <TransmissionParameters>
                <Parameter Name="Version">1.0.1</Parameter>
                <Parameter Name="OrderXMLType">DEFAULT</Parameter>
                <Parameter Name="UniqueTransmissionID">'.time().'</Parameter>
                <Parameter Name="NoOfOrdersSent">1</Parameter>
            </TransmissionParameters>
            <OrderSet>
                <Order>
                    <ClientOrderID>'.$order['id'].'</ClientOrderID>
                    <ClientOrderDate>'.date('Y-m-d').'</ClientOrderDate>
                    <FirstName>'.$order['shipping_address']['first_name'].'</FirstName>
                    <LastName>'.$order['shipping_address']['last_name'].'</LastName>
                    <BirthDate>'.$order['note_attributes']['dob'].'</BirthDate>
                    <Gender>'.$order['note_attributes']['gender'].'</Gender>
                    <Address1>'.$order['shipping_address']['address1'].'</Address1>
                    <PostCode>'.$order['shipping_address']['zip'].'</PostCode>
                    <Country>'.$order['shipping_address']['country_code'].'</Country>
                    <Products>';

        foreach ($order['line_items'] as $item) {
            $xml .= '<Product>
                        <CedaRXProductID>'.$item['sku'].'</CedaRXProductID>
                        <OrderQuantity>'.$item['quantity'].'</OrderQuantity>
                    </Product>';
        }

        $xml .= '</Products>
                </Order>
            </OrderSet>
        </OrderTransmission>';

        // Send to Cedarx
        $response = sendToCedarx($CEDARX_API_URL, $xml, $CEDARX_KEY);
        
        // Update Shopify order status
        if ($response->ResponseCode == 1) {
            updateShopifyOrder($order['id'], [
                'note' => 'Sent to Cedarx - Order ID: ' . $response->CedarXOrderID
            ]);
        }
    }
}

// Run daily via cron
sendOrdersToCedarx();

?> 