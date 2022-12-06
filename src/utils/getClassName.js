export const getClassName = (defaultClasses, customClasses, optionalClasses) => {
    let classes = []

    defaultClasses && classes.push(defaultClasses)
    customClasses && classes.push(customClasses)

    for (const option in optionalClasses) {
        const className = optionalClasses[option]
        className && classes.push(className)
    }

    return classes.join(' ')
}
