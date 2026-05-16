data "aws_region" "current" {}

resource "aws_s3_bucket" "website_terraform_state_bucket" {
  bucket_prefix    = "w-tf-state"
  bucket_namespace = "account-regional"
  region           = data.aws_region.current.region
}

resource "aws_s3_bucket" "website_bucket" {
  bucket_prefix    = "website"
  bucket_namespace = "account-regional"
  force_destroy    = true
  region           = data.aws_region.current.region
}

data "aws_iam_policy_document" "origin_bucket_policy" {
  statement {
    sid    = "AllowCloudFrontServicePrincipalReadOnly"
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = ["s3:GetObject"]

    resources = [
      "${aws_s3_bucket.website_bucket.arn}/*",
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.website_distribution.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "website_bucket_policy" {
  bucket = aws_s3_bucket.website_bucket.bucket
  policy = data.aws_iam_policy_document.origin_bucket_policy.json
}

