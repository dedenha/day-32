const surveyJSON = {
    title: "Sederhana Survey Kepuasan Pelanggan",
    questions: [
        {
            type: "radiogroup",
            name: "satisfaction",
            title: "Seberapa puas Anda dengan layanan kami?",
            choices: ["Sangat Puas", "Puas", "Cukup", "Tidak Puas"]
        },
        {
            type: "comment",
            name: "feedback",
            title: "Silakan beri masukan:"
        }
    ]
};

const survey = new Survey.Model(surveyJSON);

survey.onComplete.add(function (result) {
    alert("Hasil Survey: " + JSON.stringify(result.data));
});

ReactDOM.render(
    React.createElement(Survey.Survey, { model: survey }),
    document.getElementById("surveyElement")
);
