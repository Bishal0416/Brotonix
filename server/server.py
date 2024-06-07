
import google.generativeai as genai
genai.configure(api_key="USE-YOUR-OWN-API-KEY")

from flask import Flask, render_template,jsonify, request
from model import load_model, predict
from flask_cors import CORS
import os
import requests
import json

# import blueprints.diseases_detection.resnet50
# from blueprints.diseases_detection.diseases_detection import diseases_detection_bp
# from blueprints.diseases_detection.model import load_model, predict
# from blueprints.diseases_detection.diseases_detection import prediction

app = Flask(__name__)
CORS(app)

# Directory to store uploaded images
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# app.register_blueprint(diseases_detection_bp, url_prefix="/diseases_detection")

m = load_model()
@app.route("/")
def hello_world():
    # return render_template('index.html')
    return 'hi'

@app.route("/predict", methods=['POST'])
def pred(): 
    if 'image' not in request.files:
        return jsonify({'res': "No image uploaded"})
    
    file = request.files['image']
    print(file)

    if file.filename == " ":
        print("hi inside")
        return jsonify({'res': 'No selected file'})
    
    filename='uploads/' + file.filename
    file.save(filename)

    # Make prediction using the ML model
    result = predict(m, filename)
    if 'healthy' in result:
        print("Found healthy")
        prompt = "Plant is healthy"
    else:
        prompt = result + " provide remedy for this dieases."
        print(prompt)
    
    # Set up the model
    generation_config = {
        "temperature": 0.85,
        "top_p": 1,
        "top_k": 1,
        "max_output_tokens": 2048,
    }
    safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    ]

    model = genai.GenerativeModel(model_name="gemini-1.0-pro",
                                generation_config=generation_config,
                                safety_settings=safety_settings)

    convo = model.start_chat(history=[])

    convo.send_message(prompt)
    # print(convo.last.text)
    remedy = convo.last.text



    url = "https://google.serper.dev/shopping"

    payload = json.dumps({
    "q": "MEDECINE FOR" + result,
    "gl": "in"
    })
    headers = {
    'X-API-KEY': 'USE OWN SARPER API',
    'Content-Type': 'application/json'
    }

    product = requests.request("POST", url, headers=headers, data=payload)
    print(product.text)
    prod = product.text



    response = {
        'pred': result,
        'remedy': remedy,
        'product': prod,
    }


    return jsonify({'res': response})
    






@app.route("/demo")
def demo():
    exp = "Apple___healthy"
    if 'healthy' in exp:
        return jsonify({'res':"No remedy and cured is required."})        


if __name__ == "__main__":
    app.run(debug=True)
