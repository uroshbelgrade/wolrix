<?php
require_once 'config.php';

/**
 * Basic Shopify App structure
 */
class CedarxApp {
    private $db;
    
    public function __construct() {
        // Initialize database connection
        $this->db = new PDO("mysql:host=localhost;dbname=your_db", "user", "pass");
        
        // Add tables for app installation data
        $this->initializeTables();
    }

    private function initializeTables() {
        $this->db->exec("
            CREATE TABLE IF NOT EXISTS shops (
                id INT AUTO_INCREMENT PRIMARY KEY,
                shop_url VARCHAR(255) NOT NULL,
                access_token VARCHAR(255) NOT NULL,
                installed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE KEY unique_shop (shop_url)
            );
        ");
    }

    public function install($shop_url) {
        // Generate install URL
        $install_url = "https://{$shop_url}/admin/oauth/authorize?" . http_build_query([
            'client_id' => SHOPIFY_API_KEY,
            'scope' => SHOPIFY_APP_SCOPES,
            'redirect_uri' => APP_URL . '/oauth/callback'
        ]);
        
        header("Location: " . $install_url);
        exit;
    }

    public function setupWebhooks($shop_url, $access_token) {
        // Setup webhooks for order events
        $webhooks = [
            [
                'topic' => 'orders/create',
                'address' => APP_URL . '/webhooks/order-created'
            ],
            [
                'topic' => 'orders/cancelled',
                'address' => APP_URL . '/webhooks/order-cancelled'
            ]
        ];

        foreach ($webhooks as $webhook) {
            $this->createWebhook($shop_url, $access_token, $webhook);
        }
    }
} 