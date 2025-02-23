<?php
/**
 * Error Handling and Logging
 * 
 * This file:
 * 1. Defines error handling functions
 * 2. Sets up logging
 * 3. Provides helper functions for other scripts
 */

function logError($message, $data = null) {
    $log = date('Y-m-d H:i:s') . " ERROR: " . $message;
    if ($data) {
        $log .= "\nData: " . json_encode($data);
    }
    error_log($log . "\n", 3, "cedarx_integration.log");
}

function logSuccess($message) {
    $log = date('Y-m-d H:i:s') . " SUCCESS: " . $message;
    error_log($log . "\n", 3, "cedarx_integration.log");
}

// Helper function to validate required fields
function validateOrder($order) {
    $required = ['id', 'shipping_address', 'note_attributes', 'line_items'];
    foreach ($required as $field) {
        if (empty($order[$field])) {
            throw new Exception("Missing required field: $field");
        }
    }
    return true;
}

// Helper function for API calls
function makeApiCall($url, $method = 'GET', $data = null, $headers = []) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    
    if ($data) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    }
    
    if ($headers) {
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    }
    
    $response = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);
    
    if ($error) {
        throw new Exception("API call failed: $error");
    }
    
    return $response;
}

?> 