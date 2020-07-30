function generateHtml() {
    const accForm = document.querySelector('.accordion');
    const accObject = {};
    for (const el of accForm.children) {
        if (el.id) {
            accObject[el.id] = el.value;
        }
    }
    const markup = `<div class="panel panel-default">
    <div class="panel-heading">
        <p class="panel-title">
            <a href="#${accObject['acc-id']}" rel="nofollow" data-toggle="collapse" data-parent="#accordion">
                ${accObject['acc-title']}
            </a>
        </p>
    </div>
    <div id="${accObject['acc-id']}" class="panel-collapse collapse" style="padding-top: 124px; margin-top: -124px;">
        <div class="panel-body">
            <p>
                ${accObject['acc-body']}
            </p>
        </div>
    </div>
</div>`;

    return markup.trim();
}

const submitButton = document.querySelector('.accordion button[type="submit"]');
submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    const htmlOutput = document.querySelector('#html-output');
    htmlOutput.value = generateHtml();
});
