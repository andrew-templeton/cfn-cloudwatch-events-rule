
var AWS = require('aws-sdk');
var CfnLambda = require('cfn-lambda');

var CWE = new AWS.CloudWatchEvents({apiVersion: '2014-02-03'});

var Create = CfnLambda.SDKAlias({
  api: CWE,
  method: 'putRule',
  returnPhysicalId: 'RuleArn'
});

var Update = CfnLambda.SDKAlias({
  api: CWE,
  method: 'putRule',
  returnPhysicalId: 'RuleArn'
});

var Delete = CfnLambda.SDKAlias({
  api: CWE,
  method: 'deleteRule',
  ignoreErrorCodes: [404, 409],
  keys: ['Name']
});


exports.handler = CfnLambda({
  Create: Create,
  Update: Update,
  Delete: Delete,
  TriggersReplacement: ['Name'],
  SchemaPath: [__dirname, 'schema.json']
});
