export const PROJECTS = [

    {
        "name": "Flower Classification WebApp",
        "link": "https://flower-classifier-dad75.firebaseapp.com",
        "pic": require("../resources/projects/floclassifier.jpg"),
        "description": ["• Built an end-to-end deep learning based web application to identify the type of a flower given its image", "• Used fast-ai library to train the model using transfer learning from ResNet-34.", "• Created an API using Flask and deployed it on Render.com. Built a React-based frontend and deployed it on Firebase.com"]
    },
    {
        "name": "Human Activity Recognition",
        "link": "https://github.com/aakanksha-ns/Human_Activity_Recognition",
        "pic": require("../resources/projects/har.jpg"),
        "description": ["• Determined which device-algorithm combination is best at recognizing 18 types of human activities (like jogging, running, eating etc.) using sensor readings from phone and smartwatch.", "• Used Apache PySpark for distributed preprocessing of the time-series data to extract about 50 handcrafted features per observation.", "• Compared various Spark ML, H2O, AutoML models and found XGBoost on H2O to be the best model in identifying the activities."]
    },
    {
        "name": "Lyrics Generator web-app",
        "link": "https://taylor-swift-lyrics-generator.firebaseapp.com/",
        "pic": require("../resources/projects/lyrics.jpg"),
        "description": ["•Built a custom dataset by web scraping using the BeautifulSoup library.", "• Developed a deep learning model using transfer learning from ULMFiT architecture and finetuning it to generate lyrics given a phrase as prompt. "]
    },
    {
        "name": "Gender Divide in Data Science - EDA and visualization",
        "link": "https://medium.com/datadriveninvestor/exploratory-data-analysis-eda-understanding-the-gender-divide-in-data-science-roles-9faa5da44f5b",
        "pic": require("../resources/projects/gender_ds.jpg"),
        "description": ["• Performed Exploratory Data Analysis on Kaggle 2017 and 2018 Data Science Survey Data", "• Created six visualizations using ggplot2 to show the divide between men and women in Data Science in terms of involvement and salaries"]
    },
    {
        "name": "Box Office Revenue Predictor",
        "link": "https://github.com/ShreejayaB/TMDB-Box-Office-Predictions",
        "pic": require("../resources/projects/tmdb.jpg"),
        "description": ["• Compared various regression algorithms like Naive Bayes Regressor, Random Forests, Linear Regression etc. using scikit-learn", "• Fine tuned the best regressor (Random Forests) using randomized search", "• Predicted box office revenue with an R square score of 0.85"]
    },
    {
        "name": "Predicting Student grades - Statistical Linear Regression",
        "link": "https://github.com/aakanksha-ns/linear-regression-student-grades-project",
        "pic": require("../resources/projects/grades.jpg"),
        "description": ["• Predicted Student grades based on social and economic factors", "• Employed statistical techniques and the statsmodels Python package for featue selection, model diagnosis, and residual analysis"]
    },
    {
        "name": "Movie Genre Identifier",
        "link": "https://towardsdatascience.com/building-a-movie-genre-classifier-using-a-dataset-created-using-google-images-4752f75a1d79",
        "pic": require("../resources/projects/movies.jpg"),
        "description": ["• Generated a custom dataset using Google images", "• Trained a model to identify the genre (horror, romance, superhero) of a movie by looking at its poster with an accuracy of 80%.", "• Performed various experiments on the model to improve accuracy and made observations about them."]
    },
    {
        "name": "NLP - Toxic Comment classification",
        "link": "https://towardsdatascience.com/getting-started-with-natural-language-processing-nlp-2c482420cc05",
        "pic": require("../resources/projects/comments.png"),
        "description": ["• Performed Data exploration and classified comments as toxic vs non-toxic: https://jovian.ml/aakanksha-ns/toxic-comments", "• Explored data using spacy, created wordclouds, used fasttext for classification"]
    },
    {
        "name": "Piper - Music Genre Identifier",
        "link": require("../projects/docs/piper.pdf"),
        "pic": require("../resources/projects/piper.png"),
        "description": ["• Developed an android application that can recognize the genre  and identify the lyrics of a song played externally or chosen from the device.", "• Genre classification was done using Machine learning (Neural Networks) over MFCC features, and lyrics identification using audio fingerprinting technique."]
    },
    {
        "name": "Javascript 30",
        "link": "/javascript30",
        "pic": require("../resources/projects/js30.png"),
        "description": ["• https://javascript30.com : 30 small projects built using Vanilla JS", "• Projects involve image processing using JS, using flex boxes, HTML5 Canvas, etc."]
    },

    {
        "name": "Computational Creativity -Seminar and Report",
        "link": require("../projects/docs/seminar.pdf"),
        "pic": require("../resources/projects/creativity.png"),
        "description": ["• Presented a seminar and prepared a detailed report on creativity of computers in various fields like art, music and  literature", "• Explored algorithms for art tile generation, novel name creation, etc."]
    },
    {
        "name": "Experimental Operating System",
        "link": "https://xosnitc.github.io/",
        "pic": require("../resources/projects/xos.png"),
        "description": ["• Developed a toy operating system on a simulated machine with all basic functionalities: running programs, creation/deletion of files, interrupts etc.", "• Implemented multiprogramming by invoking timer interrupts"]
    },
    {
        "name": "Data Mining",
        "link": require("../projects/docs/DM.pdf"),
        "pic": require("../resources/projects/data-mining.png"),
        "description": ["• Performed preprocessing and cleaning using OpenRefine, and Data mining using Weka on a large Diabetes dataset and determined the most effective classifier according to Weka."]
    },
    {
        "name": "College website",
        "link": require("../projects/docs/college_website.pdf"),
        "pic": require("../resources/projects/college.jpeg"),
        "description": ["• Created a six page dummy college website"]
    }

];

export const JS30_PROJECTS = [
    {
        "name": "Drumkit",
        "link": "/js30/drum-kit",
        "pic": require("../resources/js30/drumKit.png"),
        "description":
            "This is a simple application to implement a drum-kit, where you can press specific keys to produce different sounds."
    },
    {
        "name": "Analog Clock",
        "link": "/js30/analog-clock",
        "pic": require("../resources/js30/clock.png"),
        "description":
            "An anlog clock that shows the current time and has hours, minutes and seconds hand. It uses the CSS rotate method to set the hands to the current time every second."
    },
    {
        "name": "Photo Effects",
        "link": "/js30/photo-effects",
        "pic": require("../resources/js30/photo-effects.png"),
        "description":
            "A webpage to apply different styles to an image, like changing border color, blurring and changing border width. It uses js to make changes to the cc-styles applied onto the image."
    },
    {
        "name": "Multiple Check Boxes",
        "link": "/js30/shift-and-check-all",
        "pic": require("../resources/js30/multipleCheckboxes.png"),
        "description":
            "Implements function to check multiple checkboxes on holding Shift key."
    },
    {
        "name": "Flexes",
        "link": "/js30/flexes",
        "pic": require("../resources/js30/flexes.png"),
        "description": "experimenting with flexes. "
    },
    {
        "name": "Canvas",
        "link": "/js30/canvas",
        "pic": require("../resources/js30/canvas.png"),
        "description": "experimenting with html5 canvas."
    },
    {
        "name": "Type Ahead",
        "link": "/js30/Type-ahead",
        "pic": require("../resources/js30/typeAhead.png"),
        "description":
            "displayes names of cities and states that consist of the word typed, the part where the word type is contained is highlighted. It uses 'change'  and 'keyup' events to identify changes in the input value, after which a filter on the city list is done to return valid matches."
    },
    {
        "name": "Custom Video Player",
        "link": "/js30/Custom-video-player",
        "pic": require("../resources/js30/customPlayer.png"),
        "description": "A custom HTML5 Video Player."
    },
    {
        "name": "Key Sequence Detection",
        "link": "/js30/secretCode",
        "pic": require("../resources/js30/secretCode.png"),
        "description": "Type in the secret code to see the magic (aksh)"
    },
    {
        "name": "Slide in on Scroll",
        "link": "/js30/Slide-in-on-scroll",
        "pic": require("../resources/js30/slideScroll.png"),
        "description": "Pictures slide in to place on scrolling"
    }
];