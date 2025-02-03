class ShowCaseConstructor {
    constructor() {}

    createShowCaseContainer(name, image, description, linkHREF, showcaseArray) {
        const div = document.createElement('div');
        div.classList.add('showcase-div');

        const linkP = document.createElement('p');

        const link = document.createElement('a');
        link.innerText = name;
        link.href = linkHREF;

        linkP.appendChild(link);
        div.appendChild(linkP);

        const img = document.createElement('img');
        img.src = image;
        div.appendChild(img);

        const desc = document.createElement('p');
        desc.innerText = description;
        div.appendChild(desc);

        showcaseArray.push(div);
        console.log(div);
    }

    putAllShowCasesOnPage(showcaseArray, parent) {
        showcaseArray.forEach((showcase) => {
            parent.appendChild(showcase);
        });
    }
};

