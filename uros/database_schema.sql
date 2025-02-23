-- Database schema for order mapping

CREATE TABLE order_mapping (
    id INT AUTO_INCREMENT PRIMARY KEY,
    shopify_id VARCHAR(50) NOT NULL,
    cedarx_id VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending',
    UNIQUE KEY unique_shopify_id (shopify_id),
    UNIQUE KEY unique_cedarx_id (cedarx_id)
);

CREATE TABLE order_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    level ENUM('info', 'error', 'success') DEFAULT 'info'
);

-- Indexes for better performance
CREATE INDEX idx_order_mapping_status ON order_mapping(status);
CREATE INDEX idx_order_logs_order_id ON order_logs(order_id); 