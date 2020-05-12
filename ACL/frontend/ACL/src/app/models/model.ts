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

interface groupUsers {
    user_id: number,
    first_name: string,
    last_name: string
}

interface userGroups {
    user_id: number,
    group_id: number,
    group_name: string
}

interface fileDataResponse {
    status: number,
    data: string

}

export { userData, response, userGroups, groupUsers, fileDataResponse }