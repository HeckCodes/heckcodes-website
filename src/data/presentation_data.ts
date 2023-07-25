type Social = {
    label: string;
    link: string;
};

type Presentation = {
    mail: string;
    socials: Social[];
};

const presentation: Presentation = {
    mail: "heckcodes404@gmail.com",
    socials: [
        {
            label: "Github",
            link: "https://github.com/HeckCodes",
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/chandramauli-shastri",
        },
        {
            label: "Resume",
            link: "https://drive.google.com/file/d/1r55Vh--FNN5q7_GZJnSwU36Z8Xv0Xqv6/view",
        },
    ],
};

export default presentation;