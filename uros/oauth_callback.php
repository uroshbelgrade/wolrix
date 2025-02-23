<?php
require_once 'app_setup.php';

// Handle OAuth callback
if (isset($_GET['shop']) && isset($_GET['code'])) {
    $shop = $_GET['shop'];
    $code = $_GET['code'];
    
    // Verify HMAC if needed
    
    // Exchange code for access token
    $access_token = getAccessToken($shop, $code);
    
    // Store shop and token in database
    $app = new CedarxApp();
    $app->storeAccessToken($shop, $access_token);
    
    // Setup webhooks
    $app->setupWebhooks($shop, $access_token);
    
    // Redirect to app interface
    header("Location: /app/dashboard");
} 