function getAge(birthday: string) {
    const birth = new Date(birthday);
    const now = new Date();

    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

type TSection = {
    p: string;
    h2: string;
    content?: string;
};

type THero = {
    name: string;
    p: string[];
};

type TConfig = {
    html: {
        title: string;
        fullName: string;
        email: string;
    };
    hero: THero;
    sections: {
        about: Required<TSection>;
        experience: TSection;
        feedbacks: TSection;
        works: Required<TSection>;
    };
};

export const config: TConfig = {
    html: {
        title: "Joe Heyes — Portfolio",
        fullName: "Joe Heyes",
        email: "",
    }, hero: {
        name: "Joe Heyes",
        p: ["I do things...", "and whinge about everything :)"],
    }, sections: {
        about: {
            p: "Introduction",
            h2: "Overview.",
            content: `I'm a ${getAge("08-09-2006")} year old software engineer, 3d printing enthusiast and a lot more (I cant be bothered to type them all out).`,
        },
        experience: {
            p: "What I have done so far",
            h2: "Work Experience.",
        },
        feedbacks: {
            p: "What others say",
            h2: "Testimonials.",
        },
        works: {
            p: "My work",
            h2: "Projects.",
            content: `Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.`,
        },
    },
};