import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_project.settings')
django.setup()

from api_app.models import Product

def add_products():
    # Clear existing products to start fresh (optional)
    Product.objects.all().delete()
    
    products = [
        # Electronics
        {"name": "Smartphone Pro", "description": "High-end smartphone with a sleek design.", "price": 999.99, "category": "Electronics", "stock": 15},
        {"name": "Wireless Headphones", "description": "Noise-cancelling wireless headphones.", "price": 199.99, "category": "Electronics", "stock": 25},
        {"name": "4K Smart TV", "description": "65-inch ultra HD smart TV.", "price": 1200.50, "category": "Electronics", "stock": 8},
        {"name": "Gaming Laptop", "description": "High-performance laptop for gaming.", "price": 1499.00, "category": "Electronics", "stock": 10},
        
        # Fashion
        {"name": "Leather Jacket", "description": "Stylish black leather jacket.", "price": 120.00, "category": "Fashion", "stock": 20},
        {"name": "Summer Floral Dress", "description": "Light and airy floral dress.", "price": 45.99, "category": "Fashion", "stock": 30},
        {"name": "Men's Canvas Shoes", "description": "Comfortable canvas shoes.", "price": 55.00, "category": "Fashion", "stock": 50},
        {"name": "Winter Wool Scarf", "description": "Soft and warm wool scarf.", "price": 25.00, "category": "Fashion", "stock": 40},
        
        # Home
        {"name": "Coffee Maker", "description": "Automatic coffee maker.", "price": 85.50, "category": "Home", "stock": 12},
        {"name": "Smart Light Bulb", "description": "Wi-Fi enabled LED light bulb.", "price": 19.99, "category": "Home", "stock": 100},
        {"name": "Velvet Throw Pillow", "description": "Decorative velvet pillow.", "price": 30.00, "category": "Home", "stock": 60},
        {"name": "Stainless Steel Cookware", "description": "Premium 10-piece cookware set.", "price": 250.00, "category": "Home", "stock": 15},
        
        # Books
        {"name": "The Great Adventure", "description": "An epic tale of discovery.", "price": 14.99, "category": "Books", "stock": 45},
        {"name": "Cooking with Love", "description": "A collection of delicious recipes.", "price": 22.50, "category": "Books", "stock": 35},
        {"name": "History of the World", "description": "A guide to human history.", "price": 35.00, "category": "Books", "stock": 20},
        {"name": "Programming 101", "description": "A beginner's guide to coding.", "price": 40.00, "category": "Books", "stock": 50},
    ]
    
    for p in products:
        Product.objects.create(**p)
        print(f"Added: {p['name']}")

if __name__ == '__main__':
    add_products()
    print("Done adding products!")
