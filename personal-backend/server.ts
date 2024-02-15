import { App } from './src/app';
import { MessageRepository } from './src/repository/message-repository';
import { MongoDBConnection } from './src/utils/connection';

// const app = new App;
// app.run();

async function test() {
    console.log("Starting test")
    
    MongoDBConnection.getInstance();
    const messageRepo = new MessageRepository();
    // messageRepo.create("Hey! 1");
    // messageRepo.create("Hey! 2");
    // messageRepo.create("Hey! 3");
    // messageRepo.create("Hey! 4");
    // messageRepo.create("Hey! 5");
    // messageRepo.create("Hey! 6");
    // messageRepo.create("Hey! 7");
    // messageRepo.create("Hey! 8");
    console.log(await messageRepo.get(
        false,
        0,
        new Date("2024-02-15"),
        new Date("2024-02-16")
    ))
    
    console.log("Testing complete")
}

test();