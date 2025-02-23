<?php
/**
 * Cedarx API Helper Functions
 * 
 * Contains functions for:
 * - Sending orders to Cedarx
 * - Getting order status from Cedarx
 * - Cancelling orders in Cedarx
 */

require_once 'error_handler.php';

/**
 * Sends an order to Cedarx
 */
function sendToCedarx($url, $xml, $key) {
    $headers = [
        "Content-Type: application/xml",
        "XKey: " . $key
    ];

    $response = makeApiCall($url, 'POST', $xml, $headers);
    return simplexml_load_string($response);
}

/**
 * Gets order status from Cedarx
 */
function getCedarxStatus($url, $key) {
    $headers = [
        "Content-Type: application/xml",
        "XKey: " . $key
    ];

    $response = makeApiCall($url, 'GET', null, $headers);
    return simplexml_load_string($response);
}

/**
 * Cancels an order in Cedarx
 */
function cancelInCedarx($url, $key) {
    $headers = [
        "Content-Type: application/xml",
        "XKey: " . $key
    ];

    $response = makeApiCall($url, 'POST', null, $headers);
    return simplexml_load_string($response);
}

/**
 * Gets Cedarx order ID from stored mapping
 */
function getCedarxOrderId($shopify_order_id) {
    // This should get the Cedarx order ID from your database
    // Example implementation:
    $db = new PDO("mysql:host=localhost;dbname=your_db", "user", "pass");
    $stmt = $db->prepare("SELECT cedarx_id FROM order_mapping WHERE shopify_id = ?");
    $stmt->execute([$shopify_order_id]);
    return $stmt->fetchColumn();
}

?> 