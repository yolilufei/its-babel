module.exports = function() {
    return {
        visitor: {
            Identifier(nodePath, pluginPass) {
                console.log(nodePath)
                // pluginPass.file.code = `try {
                //     ${pluginPass.file.code}
                // }catch {
                //     console.error('123');
                // }`
            }
        }
    }
}