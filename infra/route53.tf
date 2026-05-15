data "aws_route53_zone" "my_domain" {
  name = local.my_domain
}

data "aws_acm_certificate" "website_certificate" {
  region   = "us-east-1"
  domain   = local.my_domain
  statuses = ["ISSUED"]
}

resource "aws_route53_record" "cloudfront_ipv4" {
  for_each = aws_cloudfront_distribution.website_distribution.aliases
  zone_id  = data.aws_route53_zone.my_domain.zone_id
  name     = each.value
  type     = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "cloudfront_ipv6" {
  for_each = aws_cloudfront_distribution.website_distribution.aliases
  zone_id  = data.aws_route53_zone.my_domain.zone_id
  name     = each.value
  type     = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}