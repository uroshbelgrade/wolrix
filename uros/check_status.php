<?php
/**
 * Check Order Status Updates
 * 
 * Statuses from Cedarx:
 * OD = Order Download
 * PP = Pharmacy Processing
 * SH = Shipped
 * IV = Invoiced
 * 
 * This script:
 * 1. Gets orders pending status updates
 * 2. Checks status with Cedarx
 * 3. Updates Shopify accordingly
 */

function checkOrderStatuses() {
    $CEDARX_API_URL = 'https://www.cedarx.co.uk/CedaRxWCF/ServiceCedaRx.svc/getOrderStatus';
    $CEDARX_KEY = 'bdX5frTebdj4jnfjnjdvn65ejndlf';

    // Get Shopify orders needing status check
    $orders = getPendingShopifyOrders();

    foreach ($orders as $order) {
        // Get status from Cedarx
        $url = $CEDARX_API_URL . '/' . $order['id'] . '/' . $order['cedarx_id'];
        $status = getCedarxStatus($url, $CEDARX_KEY);

        // Map Cedarx status to Shopify fulfillment status
        switch ($status->Status) {
            case 'SH':
                createShopifyFulfillment($order['id'], [
                    'tracking_number' => $status->Shipping->DeliveryTrackingNumber,
                    'tracking_company' => $status->Shipping->ShippingType
                ]);
                break;
            case 'IV':
                updateShopifyOrder($order['id'], [
                    'financial_status' => 'paid'
                ]);
                break;
        }
    }
}

// Run every hour via cron
checkOrderStatuses();

?> 