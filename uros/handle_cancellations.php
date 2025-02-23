<?php
/**
 * Handle Order Cancellations
 * 
 * This script:
 * 1. Listens for Shopify webhook cancellations
 * 2. Sends cancellation to Cedarx
 * 3. Handles responses
 */

function handleCancellation() {
    $CEDARX_API_URL = 'https://www.cedarx.co.uk/CedaRxWCF/ServiceCedaRx.svc/CancelOrder';
    $CEDARX_KEY = 'bdX5frTebdj4jnfjnjdvn65ejndlf';

    // Get webhook data
    $data = json_decode(file_get_contents('php://input'), true);
    
    if ($data['event'] === 'order.cancelled') {
        $order_id = $data['order_id'];
        $cedarx_id = getCedarxOrderId($order_id); // Get from your mapping

        // Cancel in Cedarx
        $url = $CEDARX_API_URL . '/' . $order_id . '/' . $cedarx_id . '/0';
        $response = cancelInCedarx($url, $CEDARX_KEY);

        if ($response->ResponseCode == 1) {
            logSuccess("Order $order_id cancelled in Cedarx");
        } else {
            logError("Failed to cancel order $order_id in Cedarx: " . $response->ResponseMessage);
        }
    }
}

// Called by Shopify webhook
handleCancellation();

?> 