Mealting Pot API Server
====

ENV:
    Required:
        PG_URI: Postgres URL
        JWT_SECRET: Private JWT key
        JWT_PUBLIC: Public JWT key
        PORT: Port
        REDIS_URL: Redis Url
        AWS_ACCESS_KEY: AWS access key
        AWS_SECRET_KEY: AWS secret key
        S3_BUCKET: S3 Bucket name
    Optional:
        NODE_DEBUG
        S3_ENDPOINT
        S3_SSL_ENABLED
        S3_FORCE_PATH_STYLE