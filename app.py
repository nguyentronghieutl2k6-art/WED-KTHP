from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Website đã hoạt động trên Heroku!</h1><p>Xin chào, đây là ứng dụng Python của tôi.</p>"

if __name__ == "__main__":
    # Lấy PORT từ Heroku, nếu không có thì mặc định là 5000 (chạy local)
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)