const express = require("express");
const expense = require('../models/expense')
const incomes = require('../models/income');
const income = require("../models/income");
const router = express.Router();

//get all expenses
router.get('/expenses', async (req,res) => {
    try{
        const expenses = await expense.find();
        res.json(expenses); 
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

//create expense
router.post('/expenses', async (req,res) => {
    const newExpense = new expense({
        expense: req.body.expense,
        type: req.body.type,
        amount: req.body.amount
    })
    try{
        const addedExpense =  await newExpense.save();
        res.status(201).json(addedExpense)
    }catch (error) {
        res.status(400).json({message: error.message})
    }
})

//get one expense by id
router.get('/expenses/:id', async (req,res) =>{
    try{
        const oneExpense = await expense.findOne({_id: req.params.id})
        res.send(oneExpense);
    }catch (error) {
        res.status(400).json({message: error.message})
    }
})

//update expense 
router.patch('/expenses/:id', async (req,res) =>{
    try{
        const updateExpense = await expense.findOne({_id: req.params.id})

        if (req.body.expense){
            updateExpense.expense = req.body.expense
        }
        if (req.body.amount){
            updateExpense.amount = req.body.amount
        }
        if (req.body.type){
            updateExpense.type = req.body.type
        }

        await updateExpense.save()
        res.send(updateExpense);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//delete expense 
router.delete('/expenses/:id', async (req,res) =>{
    try{
        await expense.deleteOne({_id: req.params.id})
        res.status(204).send()
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

//get income
router.get('/income', async (req,res) => {
    try{
        const getIncome = await incomes.find();
        res.json(getIncome); 
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

//create income
router.post('/income', async (req,res) => {
    const newIncome = new incomes({
        income: req.body.income
    })
    try{
        const addIncome =  await newIncome.save();
        res.status(201).json(addIncome)
    }catch (error) {
        res.status(400).json({message: error.message})
    }
})

//update income
router.patch('/income/:id', async (req,res) =>{
    try{
        const updateIncome = await incomes.findOne({_id: req.params.id})

        if (req.body.income){
            updateIncome.income = req.body.income
        }

        await updateIncome.save()
        res.send(updateIncome);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//get one income by id
router.get('/income/:id', async (req,res) =>{
    try{
        const oneIncome = await income.findOne({_id: req.params.id})
        res.send(oneIncome);
    }catch (error) {
        res.status(400).json({message: error.message})
    }
})



module.exports = router


