FROM node:10

LABEL com.github.actions.name="GitHub Yarn Action"
LABEL com.github.actions.description="Wraps the Yarn CLI"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="blue"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
