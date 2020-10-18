const Connection = require('./index');

exports.all = async (req,res) => {
    const connection = await Connection;
    try {
        const categories = await connection.execute('SELECT * FROM categories WHERE is_active=1 ORDER BY display_order ASC');
        return categories[0];

    } catch(e) {
        console.log(e);
    }
}

exports.questions = async (req,res) => {
    const connection = await Connection;
    const category_id = req;
    try {
        const [rows,fields] = await connection.execute('SELECT id,question FROM questions WHERE is_active=1 AND category_id = ? ORDER BY display_order ASC', [category_id]);
        let questions = [];
        for( let i=0 ; i<rows.length; i++ ) {
            const choices = await connection.execute('SELECT * FROM choices WHERE is_active=1 AND question_id = ? ORDER BY display_order ASC', [rows[i]['id']]);

            questions.push(
                { 
                    id: rows[i]['id'],
                    question: rows[i]['question'],
                    choices: choices[0]
                }
            );
        }

        return questions;

    } catch(e) {
        console.log(e);
    }

}