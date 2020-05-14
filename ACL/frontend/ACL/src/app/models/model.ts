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

interface FileFolderNode {
    user_id: number;
    parent_folder_id: number;
    parent_folder_path: string;
    name: string;
    id: number;
    permission_id: number;
    permission_descrp: string;
    path_name: string;
    type: string;
    children?: FileFolderNode[];
}

interface AllFileFolderNode {
    parent_folder_id: number;
    parent_folder_path: string;
    name: string;
    id: number;
    path_name: string;
    type: string;
    children?: FileFolderNode[];
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

export {
    userData,
    response,
    userGroups,
    groupUsers,
    fileDataResponse,
    FileFolderNode,
    AllFileFolderNode
}