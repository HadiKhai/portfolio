export const error = (cmd) => ({
        fileNotFound: `bash: ${cmd} : No such file or directory`,
        fileNotDirectory: `bash: ${cmd} : Not a directory`,
        DirectoryNotFile: `${cmd}: Is a directory`,
        cmdNotFound: `bash: ${cmd} : No such command`,
    }
);
