from flask import Flask, request, render_template, redirect, url_for,jsonify
from werkzeug.utils import secure_filename
from inference_sdk import InferenceHTTPClient
import os
import uuid

app = Flask(__name__)

# Cấu hình thư mục lưu ảnh và các định dạng cho phép
app.config['UPLOAD_FOLDER'] = 'static/uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}

# Khởi tạo client cho Roboflow API
CLIENT = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key="VyLYoteWiOzGwieQEwGh"  # Thay thế bằng API key của bạn
)

# Kiểm tra file có hợp lệ hay không
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# Hàm chuyển đổi màu sắc sang giá trị điện trở
def calculate_resistance_from_colors(colors):
    color_to_digit = {
        "black": 0, "brown": 1, "red": 2, "orange": 3, "yellow": 4,
        "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9
    }
    color_to_multiplier = {'black':  0,'brown':  1,'red':  2,'orange':  3,'yellow':  4,'green':  5,'blue':  6,
                            'violet':  7,'grey':  8,'white':  9,'gold':  10,'silver':  11}

    color_to_tolerance = { 'black':  0,'brown':  1,'red':  2,'orange':  3,'yellow':  4,
                'green':  5,'blue':  6,'violet':  7,'grey':  8,'white':  9,'gold':  10,'silver':  11}

    #
    return {
        "band_1": str(color_to_digit.get(colors[0], -1)),
        "band_2": str(color_to_digit.get(colors[1], -1)),
        "multiplier": str(color_to_multiplier.get(colors[2], -1)),
        "tolerance": str(color_to_tolerance.get(colors[3], 20))
    }

@app.route('/')
def home():
    select_values = {}
    return render_template('go.html', select_values=select_values)

@app.route('/', methods=['POST'])
def upload_image():
    if request.method == 'POST':
        if 'file' not in request.files:
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            return redirect(request.url)
        if file and allowed_file(file.filename):
            # Tạo tên file duy nhất bằng UUID
            filename = secure_filename(file.filename)
            unique_filename = f"{uuid.uuid4()}.{filename.rsplit('.', 1)[1].lower()}"
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], unique_filename))
            return redirect(url_for('uploaded_file', filename=unique_filename))
    return render_template('go.html')

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    # Lấy đường dẫn đầy đủ đến file ảnh đã upload
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)

    # Gửi ảnh đến API Roboflow
    result = CLIENT.infer(filepath, model_id="resistorassignment/3")
    colors = str(result['predictions'][0]['class'])    

    # Chuyển đổi các màu sang định dạng bạn cần (vd: yellow-blue-red-gold)
    color_list = colors.split("-") 
    print(color_list)
    select_values = calculate_resistance_from_colors(color_list)
    print(select_values)
        
    # Trả về kết quả cùng tên ảnh để hiển thị trên giao diện
    return jsonify(select_values)

if __name__ == '__main__':
    # Chạy ứng dụng Flask
    app.run(debug=True)
