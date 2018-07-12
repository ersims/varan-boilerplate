#!/usr/bin/env bash
curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=`git log -n 1 --pretty=format:"%H"`\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/ersims/varan-boilerplate/tree/master
