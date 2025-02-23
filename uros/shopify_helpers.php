<?php
/**
 * Shopify API Helper Functions
 * 
 * Contains functions for:
 * - Fetching orders from Shopify
 * - Updating orders in Shopify
 * - Creating fulfillments
 */

require_once 'error_handler.php';

// Shopify API credentials 
const SHOPIFY_SHOP_URL = 'your-store.myshopify.com';
const SHOPIFY_ACCESS_TOKEN = 'your-access-token';

/**
 * Gets new orders from Shopify that need to be sent to Cedarx
 * Looks for orders with specific tags or metafields
 */
function getNewShopifyOrders() {
    $url = "https://" . SHOPIFY_SHOP_URL . "/admin/api/2023-01/orders.json";
    $url .= "?status=open&financial_status=paid";  // Add your filters
    
    $headers = [
        "X-Shopify-Access-Token: " . SHOPIFY_ACCESS_TOKEN,
        "Content-Type: application/json"
    ];

    $response = makeApiCall($url, 'GET', null, $headers);
    $orders = json_decode($response, true)['orders'];

    // Filter for orders that haven't been sent to Cedarx yet
    return array_filter($orders, function($order) {
        return !strpos($order['note'], 'Sent to Cedarx');
    });
}

/**
 * Gets orders that need status updates from Cedarx
 */
function getPendingShopifyOrders() {
    $url = "https://" . SHOPIFY_SHOP_URL . "/admin/api/2023-01/orders.json";
    $url .= "?status=open&fulfillment_status=null";
    
    $headers = [
        "X-Shopify-Access-Token: " . SHOPIFY_ACCESS_TOKEN,
        "Content-Type: application/json"
    ];

    $response = makeApiCall($url, 'GET', null, $headers);
    $orders = json_decode($response, true)['orders'];

    // Only return orders that have been sent to Cedarx
    return array_filter($orders, function($order) {
        return strpos($order['note'], 'Sent to Cedarx');
    });
}

/**
 * Updates a Shopify order
 */
function updateShopifyOrder($order_id, $data) {
    $url = "https://" . SHOPIFY_SHOP_URL . "/admin/api/2023-01/orders/{$order_id}.json";
    
    $headers = [
        "X-Shopify-Access-Token: " . SHOPIFY_ACCESS_TOKEN,
        "Content-Type: application/json"
    ];

    $body = json_encode(['order' => $data]);
    
    return makeApiCall($url, 'PUT', $body, $headers);
}

/**
 * Creates a fulfillment for a Shopify order
 */
function createShopifyFulfillment($order_id, $data) {
    $url = "https://" . SHOPIFY_SHOP_URL . "/admin/api/2023-01/orders/{$order_id}/fulfillments.json";
    
    $headers = [
        "X-Shopify-Access-Token: " . SHOPIFY_ACCESS_TOKEN,
        "Content-Type: application/json"
    ];

    $body = json_encode(['fulfillment' => $data]);
    
    return makeApiCall($url, 'POST', $body, $headers);
}

?> 