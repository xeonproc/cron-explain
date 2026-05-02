import { Command } from 'commander';
import cronstrue from 'cronstrue';

const program = new Command();

program
  .name('cron-explain')
  .description('CLI to explain cron expressions in human-readable language.')
  .version('0.1.0');

program.argument('<expression>', 'The cron expression to explain')
  .action((expression) => {
    try {
      const explanation = cronstrue.toString(expression);
      console.log(explanation);
    } catch (error: any) {
      console.error(`Error: Invalid cron expression - ${error.message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);
