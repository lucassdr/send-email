
const package_json = require('../../package.json')

module.exports = {
    async health(req, res) {
        try {
            return res.status(200).json({
                health_check: `TUDO OK POR AQUI - ${
                    package_json.version
                } - ${new Date()}`,
            })
        } catch (error) {
            console.error('HEALTH CHECK ==> ', error)
            return res.json({ health_check: 'Erro no console' })
        }
    },
}