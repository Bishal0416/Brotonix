import torch
import torchvision.transforms as transforms
from PIL import Image
import onnxruntime


# path = 'blueprints/diseases_detection/tomato.JPG'

def load_model():
    # Load the ONNX model
    path = 'resnet50.onnx'
    sess = onnxruntime.InferenceSession(path)
    return sess


def predict(sess, image_path):
    # Define classes
    train=['Apple___Apple_scab',
    'Apple___Black_rot',
    'Apple___Cedar_apple_rust',
    'Apple___healthy',
    'Blueberry___healthy',
    'Cherry_(including_sour)_Powdery_mildew',
    'Cherry_(including_sour)_healthy',
    'Corn_(maize)_Cercospora_leaf_spot Gray_leaf_spot',
    'Corn_(maize)Common_rust',
    'Corn_(maize)_Northern_Leaf_Blight',
    'Corn_(maize)_healthy',
    'Grape___Black_rot',
    'Grape__Esca(Black_Measles)',
    'Grape__Leaf_blight(Isariopsis_Leaf_Spot)',
    'Grape___healthy',
    'Orange__Haunglongbing(Citrus_greening)',
    'Peach___Bacterial_spot',
    'Peach___healthy',
    'Pepper,bell__Bacterial_spot',
    'Pepper,bell__healthy',
    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy',
    'Raspberry___healthy',
    'Soybean___healthy',
    'Squash___Powdery_mildew',
    'Strawberry___Leaf_scorch',
    'Strawberry___healthy',
    'Tomato___Bacterial_spot',
    'Tomato___Early_blight',
    'Tomato___Late_blight',
    'Tomato___Leaf_Mold',
    'Tomato___Septoria_leaf_spot',
    'Tomato___Spider_mites Two-spotted_spider_mite',
    'Tomato___Target_Spot',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    'Tomato___Tomato_mosaic_virus',
    'Tomato___healthy']
    
    # Define the transformation to be applied to the image
    trans = transforms.Compose([
        transforms.Resize((256, 256)),  # Resize the image to 256x256
        transforms.ToTensor(),           # Convert the image to a PyTorch tensor
    ])
    # Load and preprocess the image
    img_path = image_path
    image = Image.open(img_path)
    print(image)
    img_tensor = trans(image).unsqueeze(0)  # Add batch dimension
    img_tensor = img_tensor.repeat(32, 1, 1, 1)
    # Run inference
    input_name = sess.get_inputs()[0].name
    output_name = sess.get_outputs()[0].name
    result = sess.run([output_name], {input_name: img_tensor.numpy()})
    pred_class_index = torch.argmax(torch.Tensor(result[0]))
    # Get the predicted class
    predicted_class = train[pred_class_index.item()]
    print("Predicted class:", predicted_class)
    return(predicted_class)

m = load_model()
# p = predict(m, path)

