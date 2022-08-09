web: node . --server
db: node . --db "mongodb+srv://Plutobot:mcj9t5KFEZ1UYo8v@pluto.5tw5xai.mongodb.net/?retryWrites=true&w=majority" --autocleartmp --restrict
worker: npx pm2 start npm --node-args="--optimize_for_size --max_old_space_size=460" -- run db && npx pm2 logs
