export const pageTransition = {
    hidden: {
        opacity: 0.4
    },
    show: {
        opacity: 1
    },
    exit: {
        opacity: 0.4
    }
}

export const textAnimation = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.5
        }
    }
}

export const aboutAnimation = {
    hidden: {
        opacity: 0,
        x: -300
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    }
}

export const imgAnimation = {
    hidden: {
        opacity: 0,
        x: 200
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1,
            duration: 1
        }
    }
}

export const serviceBoxAnimation = {
    hidden: {
        opacity: 0,
        x: -80
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.7
        }
    }
}

