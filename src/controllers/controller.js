const knex = require('knex');
const tableName = 'usuarios';

let queryBuilder;

const connectDatabase = async () => {
    queryBuilder = queryBuilder || knex({
        client: 'pg',
        connection: 'postgres://URL',
        searchPath: ['knex', 'public'],
    });

    return queryBuilder;
}

// Estrutura para visualizar users no DB 
const getUSer = async () => {
    const queryBuilder = await connectDatabase();

    return queryBuilder.select('*').from(tableName);
};

// Estrutura para criar users no DB
const createUSer = async ({ 
    name, 
    lastname 
}) => {
    const queryBuilder = await connectDatabase();

    return queryBuilder(tableName).insert({
        name,
        lastname
    });
};


// Estrutura para atualizar users no DB
const updateUser = async ({ id }, { name, lastname }) => {

    try {
        const queryBuilder = await connectDatabase();

        await queryBuilder(tableName)
            .where({ id })
            .update({
                name, 
                lastname
            });

            return {
                message:'Update feito com Sucesso'
            }
    } catch (error) {
        throw new Error('Deu ruim');
    }
};


// Estrutura para deletar users no DB
const deleteUser = async ({ id }) => {

    try {
        const queryBuilder = await connectDatabase();

        await queryBuilder(tableName)
            .where({ id })
            .del ();

        return {
            message: 'Usuário removido com Sucesso'
        };

    } catch (error) {
        throw new Error('Deu ruim')
    };
    
};

module.exports = {
    getUSer,
    createUSer,
    updateUser,
    deleteUser
}
