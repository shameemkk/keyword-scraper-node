module.exports = {
  apps: [
    {
      name: "node-scrapp",
      script: "app.js",
      instances: "max",          // Run one worker per CPU core
      exec_mode: "cluster",      // Cluster mode = multi-threaded
      autorestart: true,         // Restart on crash
      watch: false,              // No file watching in Docker
      max_memory_restart: "500M",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log"
    }
  ]
};
