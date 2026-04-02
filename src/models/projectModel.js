class ProjectModel {
    constructor(
        name,
        subTitle,
        image,
        description,
        keywords,
        codeLink,
        viewLink,
        demoLink
    ) {
        this.name = name
        this.subTitle = subTitle
        this.image = image
        this.description = description
        this.keywords = keywords
        this.codeLink = codeLink
        this.viewLink = viewLink
        this.demoLink = demoLink
    }
}

export default ProjectModel