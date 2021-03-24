# Localstack POC

Proof of concept of testing AWS SDK V3 services (wrapped up as Systemic components)  with Localstack and Jest

to run the tests, first you'll need to set up the infrastructure running

```
npm run infra:up
```

Once the infrastructure is up, you'll just need to run

```
npm run test
```

Finally, you can tear down the whole infra running 

```
npm run infra:down
```
