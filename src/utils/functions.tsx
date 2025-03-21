export function getInitials(name: string) {
    const initials = name
        .split(" ")
        .map(word => word[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    return initials;
}

export function getOrganizationsStatusBadgeStyle(status: string) {
    switch (status) {
        case "actif":
            return "greenBadgeStyle";
        case "inactif":
            return "grayBadgeStyle";
        case "en attente":
            return "blueBadgeStyle";
        case "bloqué":
            return "redBadgeStyle";
    }
}

