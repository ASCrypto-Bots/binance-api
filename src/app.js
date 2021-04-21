import express from 'express';
import dotenv from 'dotenv';
import configureExpress from './utils/configureExpress';

dotenv.config();
configureExpress(express());
