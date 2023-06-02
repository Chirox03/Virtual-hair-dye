from flask import Flask, request, jsonify, render_template
import numpy as np
import tensorflow as tf
from PIL import Image
import pickle

# Create flask app
flask_app = Flask(__name__)
# Load the HairDye object from the file
with open('HairDye.pkl', 'rb') as file:
    model = pickle.load(file)


@flask_app.route("/")
def Home():
    return render_template("index.js")
@flask_app.route("/predict", methods = ["POST"])
def predict():
    image_file = request.files['image']
    image = Image.open(image_file) 
    # Convert the result image to bytes
    result_image_bytes = image.tobytes()

    return result_image_bytes

if __name__ == "__main__":
    flask_app.run(debug=True)