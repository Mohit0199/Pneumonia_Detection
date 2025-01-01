# **Pneumonia Detection Using Deep Learning**

## **Project Overview**

This is my first deep learning project using **Computer Vision (CV)** for detecting **Pneumonia** from chest X-ray images. The model utilizes **VGG19** as the base architecture, which is fine-tuned to predict whether a chest X-ray image indicates **Normal** or **Pneumonia**. Although the model's accuracy is still low, this project serves as a foundation for my learning in the field of **Computer Vision** and **AI**.

## **Model Architecture**

The model is built using the **VGG19** architecture, with the following layers:

- **Base Model**: VGG19 without the top layers
- **Fully Connected Layers**:
  - **Dense Layer**: 4608 units, activation function `ReLU`
  - **Dropout Layer**: 0.2 dropout rate
  - **Dense Layer**: 1152 units, activation function `ReLU`
  - **Output Layer**: 2 units (Normal or Pneumonia), activation function `Softmax`

The model is trained with a dataset of chest X-rays and uses **Transfer Learning** by fine-tuning the pre-trained VGG19 model.

## **Project Requirements**

- **Python 3.x**
- **TensorFlow**
- **Keras**
- **Flask** (for the web application)
- **OpenCV**
- **PIL (Pillow)**

## **Model Performance**

Here are the performance metrics from the model:

- **Validation Loss**: 0.8178
- **Validation Accuracy**: 50%
- **Test Loss**: 0.6409
- **Test Accuracy**: 62.5%

The model's performance shows that it is still in its early stages. Although the test accuracy of **62.5%** is a good starting point, the validation accuracy of **50%** indicates there is much room for improvement. I expect to improve the model's performance by experimenting with more data and advanced techniques.

## **Features**

- **Web Interface**: This project includes a simple Flask web application where users can upload chest X-ray images for pneumonia prediction.
- **Model Explanation**: The model classifies images into two categories: **Normal** or **Pneumonia**.
- **Real-time Prediction**: Once an image is uploaded, the model predicts the class (Normal/Pneumonia) and displays the result on the webpage.

## **Future Work**

- **Improvement in Accuracy**: The model's performance can be improved by:
  - Increasing the dataset size (more chest X-ray images)
  - Experimenting with **data augmentation** techniques
  - Fine-tuning hyperparameters and optimizing the architecture
  - Using more advanced architectures like **ResNet**, **DenseNet**, or **EfficientNet**
  - Applying **transfer learning** with models that are more suited for medical image detection
- **Model Optimization**: I plan to implement **model optimization techniques** to reduce overfitting and underfitting, such as:
  - Adding more regularization
  - Adjusting the learning rate dynamically during training
- **Expand Dataset**: Using a larger dataset will help the model generalize better.
- **Enhanced Web Interface**: I plan to improve the **Flask** app with better UI/UX design, adding features such as model confidence scores and more detailed predictions.


