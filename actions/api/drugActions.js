const Drug = require('../../db/models/drugSchema');

class DrugActions {
    async getAllDrugs(req, res) {
        let drug;
        try {
            drug = await Drug.find({});
            // throw new Error('Jakiś błąd');
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
        // console.log(drug);
        res.status(200).json(drug);
    }

    async getDrug(req, res) {
        const id = req.params.id;
        const drug = await Drug.findOne({_id: id});
        res.status(200).json(drug);
    }

    async saveDrug(req, res) {
        const title = req.body.title;
        const description = req.body.description;
        const date = req.body.date;
        console.log('Tytuł', req.body);

        let newDrug;
        try {
            newDrug = new Drug({title, description, date});
            await newDrug.save();
        } catch (err) {
            console.log('Błąd związany z brakiem podania title, description i date', err);
            return res.status(422).json({message: err.message, status: res.statusCode});
        }
        res.status(201).json(newDrug);
    }

    async updateDrug(req, res) {
        const id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const date= req.body.date;

        const drug = await Drug.findOne({_id: id});
        drug.title = title;
        drug.description = description;
        drug.date = date;
        await drug.save();

        res.status(201).json(drug);
    }

    async deleteDrug(req, res) {
        const id = req.params.id;
        await Drug.deleteOne({_id: id});

        res.sendStatus(204);
    }
}

module.exports = new DrugActions();