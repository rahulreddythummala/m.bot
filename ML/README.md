# felix

## Machine Learning
The conversational aspect of the bot is taken care of using `Watson` but there are other functional tasks that `felix` would be doing and in order to achieve this there is a necessity to build specific machine learning models that would aid `felix` in doing the tasks. The crucial tasks that `felix` must perform would be:
  - To generate abstractive summaries by taking large corpus of text as input. The input might also be given as a file. For this task, a Neural Machine translational Model would be used so that attention based abstractive summaries are generated for large texts.
  - To classify different plots/images that are embedded inside the scholarly texts like a bar char, pie chart etc and answer questions based on the knowledge acquired by learning from the images. For this task a Convolutional Neural Network would be used since this is primarily an image classification task.

## Images Data
One of the features `felix` must showcase would be answering questions based on the knowledge built from images, so there was a need for a visual question and answering dataset that would help `felix` to get trained. Enter `FigureQA` (a visual question answering dataset comprising of 200,000 images annotated with question answer pairs) was the option chosen for development of the CNN. It contains a plethora of question-answer pairs whose information corresponds to the images the dataset. For learning more about the dataset please visit [datasets.malubaa.com](https://datasets.maluuba.com/FigureQA).

## Dependencies
- `tensorflow`
- `caffe`

## Author
[Akhil Pandey](https://github.com/akhilpandey95)
