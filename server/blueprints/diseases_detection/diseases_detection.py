from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS
from model import load_model, predict
# from model import load_model, predict_image
import os


app = Flask(__name__)
CORS(app)

diseases_detection_bp = Blueprint("diseases_detection",__name__)

# Directory to store uploaded images
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load ML model
onnx = load_model()


@diseases_detection_bp.route('/', methods=['POST'])
def prediction():    
    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file:
        # Save the uploaded image
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filename)
        # Make prediction using the ML model
        result = predict(onnx, filename)
        #own work
        return jsonify({'result': result})









# @app.route('/predict', methods=['POST'])


if __name__ == '__main__':
    app.run(debug=True)
