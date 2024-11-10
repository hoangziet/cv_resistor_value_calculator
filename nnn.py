# import the inference-sdk
from inference_sdk import InferenceHTTPClient

# initialize the client
CLIENT = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key="VyLYoteWiOzGwieQEwGh"
)

# infer on a local image
result = CLIENT.infer("image.png", model_id="resistorassignment/3")


print(result['predictions'][0]['class'])