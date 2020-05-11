interface userData {
    user_id: number,
    first_name: string,
    last_name: string,
    password: string
}

interface response {
    status: number,
    data: []
}

interface userGroups {
    user_id: number,
    group_id: number,
    group_name: string
}

export { userData, response, userGroups }