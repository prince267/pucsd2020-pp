function FilesMapping(files) {
    var map = {}
    for (let i = 0; i < files.length; i++) {
        let obj = files[i]
        if (!(obj.parent_folder_id in map)) {
            map[obj.parent_folder_id] = {}
            map[obj.parent_folder_id].files = []
        }

    }
    for (let i = 0; i < files.length; i++) {
        let obj = files[i]
        map[obj.parent_folder_id].files.push(obj)
    }

    return map;
}

function FolderFileMapping(Folders, FilesMap) {
    for (let i = 0; i < Folders.length; i++) {
        if (Folders[i].child_folder_id in FilesMap) {
            Folders[i].files = FilesMap[Folders[i].child_folder_id].files
        }
        else {
            Folders[i].files = {}
        }
    }
    return Folders
}
function FolderInFolderMapping(FileFolderMap, HeadParent) {
    var map = {}
    for (var i = 0; i < FileFolderMap.length; i++) {
        var obj = FileFolderMap[i]
        if (!(obj.child_folder_id in map)) {
            map[obj.child_folder_id] = obj
            map[obj.child_folder_id].children = []
        }

        if (typeof map[obj.child_folder_id].child_folder_name == 'undefined') {
            map[obj.child_folder_id].user_id = obj.user_id
            map[obj.child_folder_id].parent_folder_id = obj.parent_folder_id
            map[obj.child_folder_id].child_folder_name = obj.child_folder_name
            map[obj.child_folder_id].child_folder_id = obj.child_folder_id
            map[obj.child_folder_id].permission_id = obj.permission_id
            map[obj.child_folder_id].permission_dscrp = obj.permission_dscrp
            map[obj.child_folder_id].path_name = obj.path_name
            map[obj.child_folder_id].files = obj.files
        }

        if (HeadParent.indexOf(obj.parent_folder_id) > -1) {
            var parent: string = '-'
        }
        else {

            var parent: string = obj.parent_folder_id

        }
        if (!(parent in map)) {
            map[parent] = {}
            map[parent].children = []
        }

        map[parent].children.push(map[obj.child_folder_id])
    }
    return map['-']

}

function filesandfolder(files, folder) {
    var FilesMap = FilesMapping(files.data)
    var FileFolderMap = FolderFileMapping(folder.data, FilesMap)
    // FolderInFolderMapping(FileFolderMap,FilesMap)
    var ChildFolderId = []
    var ParentFolderId = []
    for (let i = 0; i < FileFolderMap.length; i++) {
        ChildFolderId = ChildFolderId.concat(FileFolderMap[i].child_folder_id)
        if (!(FileFolderMap[i].parent_folder_id in ParentFolderId)) {
            ParentFolderId = ParentFolderId.concat(FileFolderMap[i].parent_folder_id)
        }
    }
    var HeadParent = []
    for (let i = 0; i < ParentFolderId.length; i++) {
        if (ChildFolderId.indexOf(ParentFolderId[i]) == -1) {
            HeadParent = HeadParent.concat(ParentFolderId[i])
        }
    }
    var FileFolder = FolderInFolderMapping(FileFolderMap, HeadParent)

    return FileFolder
    // console.log("***  ",JSON.stringify(FileFolder))
}

export { filesandfolder }