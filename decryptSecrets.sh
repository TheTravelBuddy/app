#!/bin/sh

# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPTION_KEY" \
    --output ./android/app/google-services.json ./android/app/google-services.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPTION_KEY" \
    --output ./src/helpers/secret-config.json ./src/helpers/secret-config.json.gpg