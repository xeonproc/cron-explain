"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const cronstrue_1 = __importDefault(require("cronstrue"));
const program = new commander_1.Command();
program
    .name('cron-explain')
    .description('CLI to explain cron expressions in human-readable language.')
    .version('0.1.0');
program.argument('<expression>', 'The cron expression to explain')
    .action((expression) => {
    try {
        const explanation = cronstrue_1.default.toString(expression);
        console.log(explanation);
    }
    catch (error) {
        console.error(`Error: Invalid cron expression - ${error.message}`);
        process.exit(1);
    }
});
program.parse(process.argv);
